$(function(){
  $(".latest_tweet").tweet({
    join_text: "auto",
    username: "primevista",
    avatar_size: 0,
    count: 1,
    auto_join_text_default: "",
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "loading tweets..."
  });
});