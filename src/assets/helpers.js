export default {
    lpad(value, padding){
		var zeroes = new Array(padding+1).join("0");
		return (zeroes + value).slice(-padding);
	}
}