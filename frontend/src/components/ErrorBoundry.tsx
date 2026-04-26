import React, { type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
 
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-w-xs max-h-80 overflow-scroll scrollbar-hide p-4 border-gray-200 border outline-slate-200 shadow-gray-200 shadow-xs rounded-md  flex flex-col justify-center gap-4 shrink-0 bg-white ">
          Something went wrong. Cannot fetch Item
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;