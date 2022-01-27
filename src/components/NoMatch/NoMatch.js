import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

export default class NoMatch extends Component {

  render() {
    return (
        <Container>
            <div className="vh-100 mt-5 p-2 d-flex flex-column align-items-center justify-content-center" style={{marginTop: '5rem'}}>
                <h1 className="Yoku-Font-Monoid-B">
                    404 Not Found
                </h1>
                <p className="Yoku-Font-Iosevka p-5 fs-3">
                    找不到這個網址，請輸入正確的網址！
                </p>
            </div>
        </Container>
    );
  }

}
