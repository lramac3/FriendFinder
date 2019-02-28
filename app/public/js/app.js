$(document).ready(function () {

    let modal = $("#myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.css("display", "block");
    }

    span.onclick = function () {
        modal.css("display", "none");
    }

    $(window).on("click", (function (event) {
        if (event.target == modal[0]) {
            modal.css("display", "none");
        }
    }));

    function compare(current) {
        $("#match").empty();
        $.get("/api/friends").then(function (data) {
            let friend = data[0];
            let lowest = 0;
            for (let i = 0; i < data[0].scores.length; i++) {
                lowest += Math.abs(current.scores[i] - data[0].scores[i])
            }
            for (let j = 0; j < data.length; j++) {
                let scores = data[j].scores;
                let score = 0;
                for (let i = 0; i < scores.length; i++) {
                    score += Math.abs(current.scores[i] - scores[i]);
                }
                if (score < lowest) {
                    lowest = score;
                    friend = data[j];
                }
            }
            console.log(lowest);
            console.log(friend);
            $("#addFriend").addClass("hidden");
            $("#myBtn").removeClass("hidden");
            $("#match").append(`<p>${friend.name}</p></p><img src ='${friend.photo}'></p>`);
            modal.css("display", "block");
            $.post("/api/friends", current).then(function (data) {
                console.log(data);
            });
            return friend;
        });
    }

    $(document).on("submit", "#addFriend", function (e) {
        e.preventDefault();
        let current = {
            name: $("#name").val().trim(),
            photo: $("#photoLink").val().trim(),
            scores: [$("#q1answer").val(), $("#q2answer").val(), $("#q3answer").val(), $("#q4answer").val(), $("#q5answer").val(), $("#q6answer").val(), $("#q7answer").val(), $("#q8answer").val(), $("#q9answer").val(), $("#q10answer").val()]
        };
        // console.log(current);
        compare(current);
    });


});