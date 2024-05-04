import { useFormik } from "formik";
export default function FormikValidation() {
    // All data come into function and verify.If error occured then store into errors{} (send to formik)
    function VerifyUserDetails(userDetails) {
        const errors = {};
        if (userDetails.UserName == "") {
            errors.UserName = "UserName is Required";
        } else if (userDetails.UserName.length < 4) {
            errors.UserName = "User Name too short.."
        } else if (userDetails.UserName > 10) {
            errors.UserName = "User Name too long.."
        }

        if (userDetails.Age == "") {
            errors.Age = "Age is required";
        }
        else if (isNaN(userDetails.Age)) {
            errors.Age = "Age must be a Number";
        }

        if (userDetails.Email == "") {
            errors.Email = "Email is required";
        }
        else if (userDetails.Email.indexOf('@') <= 2) {
            errors.Email = "Invalid Email";
        }

        if (userDetails.Mobile == "") {
            errors.Mobile = "Mobile Number is Required";
        }
        else if (userDetails.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = "Invalid Mobile"
        }
        return errors;
    }
    // all data come here when user enter
    const formik = useFormik({
        initialValues:
        {
            UserName: '',
            Age: 0,
            Email: '',
            Mobile: ''
        },
        // for any restriction(validation)
        validate: VerifyUserDetails,
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} placeholder="Enter Your Name..." /></dd>
                    {/* Showing errors */}
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} placeholder="Enter Age"/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange} placeholder="Enter Your Email"/></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" placeholder="Enter Mobile Number" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}