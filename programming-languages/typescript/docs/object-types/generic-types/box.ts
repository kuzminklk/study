
interface Box<Type> {
    content: Type;
}

let box: Box<string> = {
    content: "Hello!",
};


function setContent<Type>(box: Box<Type>, newContents: Type) {
  box.content = newContents;
}