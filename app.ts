//promises
const fn = () => {
	return new Promise((resolve , reject ) => {
		resolve(5*5)
	})
}
fn()
	.then((res) => {
	console.log(res);
	
	})
	.catch((error) => {
		console.log("CATCH",error);
		
	})

//1 second = 1000ms

let isVistory = false
const criket = () => {
	return new Promise((resolve,reject) =>{
		if (isVistory == false) {
			console.log("match in progress!!");
			
			setTimeout(() => {
				resolve("We Won");
			},2000)
			//resolve("We Won");	
		} else {
			console.log("Match in progress!!");
			setTimeout(() => {
				reject("We Lose ");
			},2000)
			//reject("We Lose ")
		}
	})
}
criket()
	.then((res) => {
		console.log(res);
		return "MOM Babar"
	})
	.then((resolve) => {
		console.log(resolve);
		return "100 of 40 balls"
	})
	.then((resolve) => {
		console.log(resolve);
	})
	.catch((error) => {
		console.log(error);
		return "qudrat ka nizam "
	})
	.then((error) => {
		console.log("ErrorResponseInThen",error)
	})
	.finally(() => {
	console.log("flight pakro");
	
	})
///second method
let isVistory0ne = true

async function getResult () {
	try {
		const data = await criket();
		console.log(data);
	}
	catch (error) {
		console.log(error);
	}
	finally {
		console.log("COME BACK TO HOME");
	}
}
getResult()

let array: number[] = [1, 2, 3, 4]
array.unshift(1,4)