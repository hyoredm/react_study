class Hello extends React.Component {
    render() {
     return <div>Hello {this.props.toWhat}</div>;
    } // JSX코드
   }
   
   ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
   ); // react DOM의 렌더함수를 통해 화면에 렌더링