import React from "react";
import NotFound from "../NotFound";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    //Change this to logging service later
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <NotFound />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;