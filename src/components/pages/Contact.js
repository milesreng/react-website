import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <h1>Contact Me</h1>
                <div className="card row">
                    <div className="card-body form-container">
                        <form method="post" action="https://public.herotofu.com/v1/acdc8260-4276-11ed-9b17-6fdf7f94f506">
                            <div className="mb-3 input-group">
                                <span class="input-group-text form-label form-firstline" id="basic-addon1">Name</span>
                                <input className="col-sm-2 form-control form-firstline" type="text" name="name" required></input>
                                <span class="input-group-text form-label form-firstline" id="basic-addon1" >Email</span>
                                <input className="col-sm-4 form-control form-firstline" type="email" name="email" placeholder="firstlast@example.com" required></input>
                            </div>
                            <div className="mb-3 input-group">
                                <textarea className="col-sm-6 mt-4 contact-message form-control" name="message" placeholder="Your message..." required></textarea>
                            </div>
                            <button id="btn-submit-form" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;