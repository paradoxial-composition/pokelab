import React, {useState, useEffect} from 'react';
import {Progress, Modal, Row, Col} from 'antd';

let Loading = ({ loading, error}) => {
    let [precentValue, setPercentValue] = useState(0)
    let [exception, setException] = useState('')
    useEffect( () => {
        if(error) {
            setException('exception')
            setPercentValue(71)
        }
        let intervalRef = setTimeout(() => {
            setPercentValue(precentValue + 1)
        }, 15)

        return  () => {
            clearTimeout(intervalRef)
        }
    }, [precentValue])
	return (
        <Modal
            centered={true}
            // bodyStyle={{height: '50px'}}
            width={300}
            visible={loading} 
            footer={null} 
            closable={false} 
            maskClosable={false}
        >
            <Row justify="space-around" align="middle" >
                <Col>
                    <img 
                        src="https://64.media.tumblr.com/dd3f6857ecc417bfbea89bb8ed37a5f7/tumblr_ox6e6kF3HG1sox2ufo1_400.gifv"
                        alt="Loading .."
                        height="50px"
                    />
                </Col>
            </Row>
            <Progress percent={precentValue} status={exception} />
            {/* <Progress type="circle" percent={precentValue} /> */}
        </Modal>
		);
}

export default Loading;