import React from 'react';

class errorboundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // تحديث الحالة إذا حصل خطأ
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // هنا تقدر ترسل الخطأ لسيرفر أو لوج معين
    console.error("Error boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // الرسالة اللي تظهر للمستخدم لو حصل خطأ
      return <h2>😬 عذرًا، حدث خطأ غير متوقع!</h2>;
    }

    return this.props.children; 
  }
}

export default errorboundary;
