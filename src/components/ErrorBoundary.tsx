import { Component, type ErrorInfo, type ReactNode } from "react";
import { logError } from "@/lib/monitoring";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    void logError(`${error.message} - ${info.componentStack}`);
  }

  render() {
    if (this.state.hasError) {
      return <p>Terjadi kesalahan.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
