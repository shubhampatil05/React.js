// JSX Attributes..

let Img1 = "https://picsum.photos/200/300";
let Img2 = "https://picsum.photos/200/300";
let Img3 = "https://picsum.photos/200/300";
let Link =
  "https://www.google.com/search?q=lorem+ipsum+dummy+image&rlz=1C1CHBD_enIN1024IN1024&sxsrf=ALiCzsahD0Kh6bybZCFcjjHJmShui50TlQ:1668751469038&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiJ3Z7Uh7f7AhVMSmwGHfXlA_kQ_AUoAXoECAIQAw&biw=648&bih=653&dpr=1";

let JSX_Attribute = (
  <>
    <h1 contentEditable="true">This Text Can Be Editable</h1>
    <img src={Img1} />
    <img src={Img2} />
    <a href={Link}>
      <img src={Img3} />
    </a>
    <hr></hr>
  </>
);

let New6 = ReactDOM.createRoot(document.getElementById("New6"));

New6.render(JSX_Attribute);
