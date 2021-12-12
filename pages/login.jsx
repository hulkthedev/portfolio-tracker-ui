import React from "react";
import Head from "next/head";
import Signup from "../components/login/signup";
import DefaultLayout from "../components/layouts/defaultLayout";

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <img src="" className="image" />
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"/>
                                    <input type="text" name="email" placeholder="E-mail address" />
                                </div>
                            </div>

                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"/>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="ui fluid large teal submit button">Login</div>
                        </div>

                        <div className="ui error message"/>

                    </form>

                    <button className="ui primary button">
                        Save
                    </button>
                    <button className="ui button">
                        Discard
                    </button>

                    <div className="ui labeled button" tabIndex="0">
                        <div className="ui red button">
                            <i className="heart icon"></i> Like
                        </div>
                        <a className="ui basic red left pointing label">
                            1,048
                        </a>
                    </div>
                    <div className="ui labeled button" tabIndex="0">
                        <div className="ui basic blue button">
                            <i className="fork icon"></i> Forks
                        </div>
                        <a className="ui basic left pointing blue label">
                            1,048
                        </a>
                    </div>
                </div>
            </div>

            {/*<section >*/}
            {/*    <div className="ui equal width grid">*/}
            {/*        <div className="column">*/}
            {/*            <div className="ui segment">*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="eight wide column">*/}
            {/*            <div className="ui segment">*/}
            {/*                2*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="column">*/}
            {/*            <div className="ui segment">*/}
            {/*                3*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <h2>Login Page</h2>*/}
            {/*    <Signup />*/}
            {/*</section>*/}
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            { page }
        </DefaultLayout>
    );
};