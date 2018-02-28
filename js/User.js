



var User = {
    name,
    track,
    achievements,
    points
};

function populateUser(name, track, achievements, points) {
    User.name = name;
    User.track = track;
    User.achievements = achievements;
    User.points = points;

    return User;
}

var Class = [
    {
        name: "Matthew"
},
{
    name: "Kazoua"
},

{
    name: "KM"
}

];

var nameSearched = Class.indexOf("Kazoua");
document.write(nameSearched);
