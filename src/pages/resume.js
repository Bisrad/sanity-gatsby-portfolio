import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
class Resume extends React.Component {
    render() {
        return(
            <Layout>
            <main>
                <h1>I'm the Resume Page</h1>
                <Link to="/">Homepage</Link>
            </main>
            </Layout>
        );
    }
}

export default Resume