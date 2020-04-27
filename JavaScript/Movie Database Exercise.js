var movie=[
	{
		title:"In Bruges",
		rating: 5,
		has_watched:"You have watched"
	},
	{
		title:"Frozen",
		rating: 4.5,
		has_watched:"You have not watched"
	},
	{
		title:"Mad Max Fury Road",
		rating: 5,
		has_watched:"You have watched"
	},
	{
		title:"Les Miserables",
		rating: 3.5,
		has_watched:"You have not watched"
	}
];
// for(var i=0;i<movie.length;i++)
// {
// 	console.log(movie[i].has_watched+" "+movie[i].title+" - "+movie[i].rating+" stars");
// }
movie.forEach(function(obj){
	console.log(obj.has_watched+" "+"\""+obj.title+"\""+" - "+obj.rating+" stars");
});

console.log("USE YOUR OWN MOVIES!");