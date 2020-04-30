import React, { useEffect, useState, Fragment } from "react";

export default props => {
    const { dispatch } = props;
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        console.log("init function");
    };

    return (
        <div className="hook-page">
            hook page
        </div>
    );
};
