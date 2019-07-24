import React from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      description: '',
      targetDate: moment().format('YYYY-MM-DD'),
      done: false
    }
  }

  componentDidMount () {
    if (this.props.match.params.id !== 0) {
      TodoDataService.getTodo(this.props.username, this.props.match.params.id).then(
        response => {
          this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate)
              .utc()
              .format('YYYY-MM-DD'),
            done: response.data.done
          })
        }
      )
    }
  }

  handleValidation = values => {
    let errors = {}
    if (!values.description) {
      errors.description = 'Enter a Description'
    } else if (values.description.length < 5) {
      errors.description = 'Enter at least 5 characters in Description'
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = 'Enter a valid Target Date'
    }

    return errors
  }

  handleSubmit = values => {
    let data = {
      id: this.props.match.params.id,
      username: this.props.username,
      description: values.description,
      targetDate: values.targetDate,
      done: values.done
    }
    
    if (data.id === 0) {
      TodoDataService.createTodo(data.username, data).then(
        () => this.props.history.push('/todo')
      )
    } else {
      TodoDataService.updateTodo(data.username, data.id, data).then(
        () => this.props.history.push('/todo')
      )
    }
  }

  render () {
    return (
      <div>
        <h1>Todo</h1>
        <div className='container'>
          <Formik
            initialValues={this.state}
            validate={this.handleValidation}
            onSubmit={this.handleSubmit}
            enableReinitialize
            render={props => (
              <Form>
                <ErrorMessage
                  name='description'
                  component='div'
                  className='alert alert-warning'
                />
                <ErrorMessage
                  name='targetDate'
                  component='div'
                  className='alert alert-warning'
                />
                <fieldset className='form-group'>
                  <label>Description</label>
                  <Field
                    className='form-control'
                    type='text'
                    name='description'
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <label>Target Date</label>
                  <Field
                    className='form-control'
                    type='date'
                    name='targetDate'
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <label>Complete</label>
                  <Field
                    className='form-control'
                    type='checkbox'
                    name='done'
                    checked={props.values.done}
                  />
                </fieldset>
                <button className='btn btn-success' type='submit'>
                  Save
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    )
  }
}

export default Todo
