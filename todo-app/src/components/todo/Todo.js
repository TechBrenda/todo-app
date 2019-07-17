import React from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      description: '',
      targetDate: moment().format('YYYY-MM-DD')
    }
  }

  componentDidMount () {
    TodoDataService.getTodo(this.props.username, this.state.id).then(
      response => {
        this.setState({
          description: response.data.description,
          targetDate: moment(response.data.targetDate)
            .utc()
            .format('YYYY-MM-DD')
        })
      }
    )
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
      id: this.state.id,
      username: this.props.username,
      description: values.description,
      targetDate: values.targetDate,
      done: false
    }
    console.log(data)
    TodoDataService.updateTodo(this.props.username, this.state.id, data).then(
      () => this.props.history.push('/todo')
    )
  }

  render () {
    let { description, targetDate } = this.state
    return (
      <div>
        <h1>Todo</h1>
        <div className='container'>
          <Formik
            initialValues={{ description, targetDate }}
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
