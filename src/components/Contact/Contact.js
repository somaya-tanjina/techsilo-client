import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <div className="d-flex mt-4 justify-content-center align-items-center h-100  ">
          
                <div className="form py-5">
                    <form>
                        <h3 className="text-center mb-4 fw-bold fs-1 ">
                            Contact With <span>Tech Sillo</span>
                        </h3>

                        <input
                            className="   mb-3"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            className="   mb-3"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                        />

                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="mb-3"
                        />

                        <textarea
                            className="w-100"
                            id="story"
                            name="message"
                            placeholder="message"
                        ></textarea>

                        <div className="button-container">
                            <button className="mt-4">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
