import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  message?: string;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    if (this.props.message) {
      return <h1>{this.props.message}</h1>;
    }

    return <h1>There is some problem</h1>;
  }
}

export default ErrorBoundary;
