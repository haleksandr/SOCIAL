import React from 'react';
import {connect} from 'react-redux';
import Sitebar from './Sitebar';


let mapStateToProps = (state) => {
    return {
        menuPage: state.menuPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
}

const SitebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sitebar);

export default SitebarContainer;