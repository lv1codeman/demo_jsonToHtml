// update data from JSON
$(function() {
    let year = document.querySelectorAll('.year');
    let semester = document.querySelectorAll('.semester');
    let outside_date = document.querySelectorAll('.outside-date');
    let modify_date_three = document.getElementById('modify_date_three');
    let withdraw_date_three = document.getElementById('withdraw_date_three');
    let course_search = document.getElementById('course_search');
    let pre_selection = document.getElementById('pre_selection');
    let pre_selection_result = document.getElementById('pre_selection_result');
    let course_selection = document.getElementById('course_selection');
    let sign_code = document.getElementById('sign_code');
    let pre_selection_hint = document.getElementById('pre_selection_hint');
    let modify_date = document.getElementById('modify_date');
    let withdraw_date = document.getElementById('withdraw_date');
    let semester_start = document.getElementById('semester_start');

    $.ajax({
        //請求方式為get
        type: "GET",
        //json檔案位置
        url: "data.json",
        //返回資料格式為json
        dataType: "json",
        //請求成功完成後要執行的方法
        success: function(data) {
            year.forEach(function(item, i) {
                item.innerHTML = data["學年度"];
            });
            semester.forEach(function(item, i) {
                item.innerHTML = data["學期"];
            });
            outside_date.forEach(function(item, i) {
                item.innerHTML = data["校際選課"];
            });
            course_search.innerHTML = data["課程查詢"];
            pre_selection.innerHTML = data["網路預選"];
            pre_selection_result.innerHTML = data["公告預選"];
            // pre_selection_hint.innerHTML = data["網路預選_hint"];
            course_selection.innerHTML = data["網路加退選"];
            // sign_code.innerHTML = data["線上加簽"];
            modify_date.innerHTML = data["選課更正"];
            withdraw_date.innerHTML = data["期中停修"];
            // modify_date_three.innerHTML = data["選課更正_three"];
            // withdraw_date_three.innerHTML = data["期中停修_three"];
            // semester_start.innerHTML = data["開學日"];
        }
    });
});