import React, {useState, useEffect} from 'react';
import {Progress, Modal} from 'antd';

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
            <Progress percent={precentValue} status={exception} />
            {/* <Progress type="circle" percent={precentValue} /> */}
        </Modal>
		);
}

export default Loading;