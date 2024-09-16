function  Hello() {
  let my_name='Amit';
  let number =5;
  let myFullName=()=>{
    return  'Amit Saini';
  }
  return <p>
    MessageNo.{number} MY Name:{my_name} ,My Full Name:{myFullName()}

  </p>
}
export default Hello