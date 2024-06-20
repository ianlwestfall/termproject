import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        const { name, email, subject, message } = formData;

        if (name.length < 2 || !/^[a-zA-Z]+$/.test(name)) {
            errors.name = 'Please enter 2 or more alphabetic characters.';
        }

        if (!email || !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
            errors.email = 'Please enter a valid email address.';
        }

        if (subject.length < 2) {
            errors.subject = 'Please enter 2 or more characters.';
        }

        if (message.length < 2) {
            errors.message = 'Please enter 2 or more characters.';
        }

        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();

        if (!errors.name && !errors.email && !errors.subject && !errors.message) {
            setSuccessMessage(`Thanks for the message ${formData.name}, I'll respond as soon as I can!`);
            document.getElementById('myForm').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        } else {
            setErrors(errors);
        }
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <p>If you want to contact me, use the form below! I'll respond as soon as I have the time.</p>
            <div className="form-container">
                <form id="myForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                        {errors.subject && <span className="error">{errors.subject}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Send</button>
                </form>
                <div id="success-message" className="success-message">
                    {successMessage}
                </div>
            </div>
        </div>
    );
};

export default Contact;