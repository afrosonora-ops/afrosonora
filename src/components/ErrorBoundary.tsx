import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-3">
              Algo correu mal
            </h1>
            <p className="text-muted-foreground mb-6">
              Ocorreu um erro inesperado. Tente novamente ou volte à página inicial.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 rounded-xl border border-border text-foreground hover:bg-muted transition-colors"
              >
                Recarregar
              </button>
              <button
                onClick={this.handleReset}
                className="px-6 py-3 rounded-xl bg-gold text-background font-semibold hover:opacity-90 transition-opacity"
              >
                Voltar ao início
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
