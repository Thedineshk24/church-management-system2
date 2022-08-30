import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertMessage() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger p-0 mt-5" onClose={() => setShow(false)} dismissible>
                <Alert.Heading></Alert.Heading>
                <p>
                    Incorrect email or password.
                </p>
            </Alert>
        );
    }
}

export default AlertMessage;
