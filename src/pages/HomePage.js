import { Header } from "../components/Header";
import { Counter } from "../components/Counter";

export function HomePage() {
  return (
    <main>
      <Header heading="Word Counter" subHeading="Free online character and word count tool." />
      <Counter />
    </main>
  );
}




// export const HomePage = () => {
// //   document.getElementById("signupform").addEventListener("submit", function(e){
// //     e.preventDefault();
// //     let name = document.getElementById("name").value;
// //     let email = document.getElementById("email").value;
// //     let mobile = document.getElementById("mobile").value;

// //     let userlist = document.getElementById("userlist");
// //     userlist.innerHTML = `name:${name}, email:${email}, mobile:${mobile}`;

// // })
//   return (
//     <>
//     <form id="signupform">
//             <h1>signup form</h1>
//             <input type="text" id="name" placeholder="name"/>
//             <input type="email" id="email" placeholder="email"/>
//             <input type="number" id="mobile" placeholder="moblie number"/>
//             <input type="submit" name="submit"/>
//         </form>
    
//     <div id="userlist"></div>

//     </>
//   )
// }

