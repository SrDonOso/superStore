import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliar from '../Auxiliar/Auxiliar';

/**
 * Wrapper component that will intercept any error that the axios service throws
 * @param {Component that will be wrapped to show error when the service fails} WrappedComponent 
 * @param {Monitored service} axios 
 */
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }; 

    /**
     * when componentWillMount ocurrs the request and response interceptors are initialized
     */
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    /**
     * when componentWillUnmount ocurrs, the interceptors are ejected
     */
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    /**
     * when modal is closed the error gets cleaned
     */
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Auxiliar>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliar>
      );
    }
  }
}

export default withErrorHandler;
