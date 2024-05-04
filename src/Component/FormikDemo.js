import { Formik, useFormik } from "formik";
import { useState } from "react";
export default function FormikDemo() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            City: '',
            Subscribe: true
        },
        onSubmit: values => {
            // alert(JSON.stringify(values));
            alert(`${values.UserName}\nSubscribe:${(values.Subscribe==true)?"Subscribe":"Not Subscribe"}`)
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    {/* /whatever value collected from text box it will handle by 'handleChange' and update into 'UserName'  ["by using value we are binding"] */}
                    {/* values=UserName,Password,City */}
                    <dd><input name="UserName" onChange={formik.handleChange} type="text" value={formik.values.UserName} /></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" type="password" onChange={formik.handleChange} value={formik.values.Password} /></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} value={formik.values.City}>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" name="Subscribe" checked={formik.values.Subscribe} onChange={formik.handleChange} />Yes</dd>
                </dl>
                <button>Register</button>
            </form>
            {/* <h2>User Details</h2>
            {formik.values.UserName} */}
        </div>
    )
}