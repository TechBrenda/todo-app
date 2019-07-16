import React from 'react'
import moment from 'moment'
import { Formik, Form, Field } from 'formik'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      description: 'Learn Forms Now',
      targetDate: moment().format('YYYY-MM-DD')
    }
  }

  handleSubmit = values => {
    console.log(values)
  }

  render () {
    let { description, targetDate } = this.state
    return (
      <div>
        <h1>Todo</h1>
        <div className='container'>
          <Formik
            initialValues={{ description, targetDate }}
            onSubmit={this.handleSubmit}
          >
            {props => (
              <Form>
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
          </Formik>
        </div>
      </div>
    )
  }
}

export default Todo
