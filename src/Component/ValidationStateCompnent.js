import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup';
export default function ValidationStateComponent() {
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={
                {
                    UserName: '',
                    Email: '',
                    Age: '',
                    City: ''
                }
            }
                validationSchema={
                    yup.object({
                        UserName: yup.string().min(4, 'Name to short..').max(10, 'Name too Long...').required('Name Required'),
                        Email: yup.string().email('Invalid Email').required('Email is required'),
                        Age: yup.number().required('Age Required'),
                        City: yup.string()
                    })
                }
                onSubmit={
                    values => {
                        alert(JSON.stringify(values))
                    }
                }
            >
                {
                    props =>
                        <Form>
                            {
                                <div>
                                    <dl>
                                        <dt>User Name</dt>
                                        {/* we can bind with 'name' property */}
                                        <dd><Field name="UserName" type="text"></Field></dd>
                                        <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>
                                        <dt>Email</dt>
                                        <dd><Field name="Email" type="text"></Field></dd>
                                        <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>
                                        <dt>Age</dt>
                                        <dd><Field name="Age" type="number"></Field></dd>
                                        <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                                        <dt>City</dt>
                                        <dd><Field name="City" as="select"></Field>
                                            <select>
                                                <option value="">Pune</option>
                                                <option value="">Hyd</option>
                                            </select>
                                        </dd>
                                    </dl>
                                    <button disabled={(props.isValid) ? false : true}>Register</button>
                                </div>
                            }
                        </Form>
                }
            </Formik>
        </div>
    )
}