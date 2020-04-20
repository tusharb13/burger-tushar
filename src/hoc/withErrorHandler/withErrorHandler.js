import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxilliary from "../Auxilliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      this.requestInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(null, (error) => {
        this.setState({ error: error });
      });
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    componentWillUnmount(){
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    render() {
      return (
        <Auxilliary>
          <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
            {this.state.error ?this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxilliary>
      );
    }
  };
};

export default withErrorHandler;
