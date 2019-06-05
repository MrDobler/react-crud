export default class FormService {
    apiURL = 'https://randomuser.me';
    // myHdrs = new Headers({
    //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZiZTgyM2U0NDhmM2I1YzMzMDhmYzRiNTM3YWM1ODY4NmFhNWM3MjRjYWFhZDA3YTkwNGExZmQ4NTkxMDgyNzEzOTQyNjdlMDdiYWJmZTNiIn0.eyJhdWQiOiIyIiwianRpIjoiNmJlODIzZTQ0OGYzYjVjMzMwOGZjNGI1MzdhYzU4Njg2YWE1YzcyNGNhYWFkMDdhOTA0YTFmZDg1OTEwODI3MTM5NDI2N2UwN2JhYmZlM2IiLCJpYXQiOjE1NTk2NzAxNTcsIm5iZiI6MTU1OTY3MDE1NywiZXhwIjoxNTkxMjkyNTU3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.s-nwEmk_JW0nbI0AQrGxtBXVM5cEtkYlmCmx41JsuknIVUZ9C9r7cfwDfZxZbqxjgL1Wrf-EidNh-1tClP_KhYxzDcCiNURoJ0s6xNNEi3PV2ujb6Mx7UjoHsN6aMyLp49YpCkXwGaOu9Ai8qUa4T2cbPOEIQABIOACPz_DKeJaIq7q_LUHuG-KLV3fy3H6H79ERkGj-prfcykyYXWVadLRwL4RtsO9QsfHIjnwibVAi-D16DxC0Keu2hW2k-ao5A3UdFkLcuGpnjypP7b1ijg5XQTwwngRqtVblzxhYfOxydwYEl4ADFLroEFwpAFy5PjISJN1Z2aUOisQ7mdpGKRWIWDGojM5NYNfL7BlkVCg3ZUw6VQkrJxKM1IkUQisj7euQvlwqcmai_PGQl_AF3x6RC8os2UOB4OsM-oxLIsWahVV-YDh9Egd17tHfDhCAobOqOmPxdUhNi8WSwEZx0q9z5r21YNh9W5sLFz3FaDMYR0e_HArbDGQMo-DubnrlMksaxCREhk8zsdnxFtfwH4BbWpBw2bmL537AwSLZ8_R9dbMYRLnlUD1CBJ3ibzigbSNLABnS-qNa26U8R4hooG8q-i1ui3q9TOF6K5vqhidehAGsIs7UyIOd80AH-nSGliVlbLqHm76wKvbZeGzJ_YfK5I5VOmK46v3MBbx6zk8',
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    // });

    
    async all() {
        return fetch('https://5cf6d7b146583900149cbcc6.mockapi.io/react-api/user/user')
        .then((user) => user.json())
        .catch((err) => console.log(err));
    }

    get() {

    }

    save() {

    }

    update() {

    }
}

