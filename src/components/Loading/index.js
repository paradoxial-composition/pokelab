import React, {useState, useEffect} from 'react';
import {Progress, Modal} from 'antd';

let Loading = ({ time, loading}) => {
    let [precentValue, setPercentValue] = useState(0)
    useEffect( () => {
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
            <Progress percent={precentValue} />
            {/* <Progress type="circle" percent={precentValue} /> */}
        </Modal>
		);
}

export default Loading;