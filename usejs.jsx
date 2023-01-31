function formatName(user) {
    return user.firstName + ' ' + user.lastName;
   }
   const user = {
     firstName: 'Inje',
     lastName: 'Lee'
    };
    
    const element = {
        <h1>
        Hello, {formatUser(user)}
        </h1>
        } ;// html 코드 사이에 괄호를 사용하여 변수가 아닌 자바스크립트 함수를 호출
   
   ReactDOM.render(
    element,
    document.getElementById('root')
    );