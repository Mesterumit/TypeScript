function err(message:string): never {
    throw new Error(message)
}

err("you are dummy , I am the error")