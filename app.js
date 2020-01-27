// // var alertString;
// // alertString = addString("Webcamp");

// // alert(alertString);

// // function addString(strA){
// //   // functionの後に関数名addStringを記述し、引数strAを入れている
// //   var addStr = "Hello" + strA;
// //   // HElloとそれを合体
// //   return addStr;
// //   // 結果を出力
// // }

// // var promptStr = prompt('何か好きな文字を入力してください');

// // alert(promptStr);
// // // 文字を入れたからアラートの中に表示された

// var user_hand = prompt('ジャンケンの手をグーチョキパーから選んでください');
// alert('あなたの選んだ手は' + user_hand + 'です');

// // ここまでが自分の手

// function getJShand(){
//   var js_hand_num = Math.floor( Math.random() * 3);

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   }else if (js_hand_num == 1){
//     js_hand = "チョキ";
//   }else if(js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return js_hand;
// }

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// var judge = winLose(user_hand, js_hand);

//  // 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// function winLose(user, js){
//   var winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr ="あいこ";
//     }else if(js ==　"チョキ"){
//       winLoseStr ="勝ち";
//     }else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   }
//   else if(user == "チョキ"){
//         if(js == "グー"){
//             winLoseStr = "負け";
//         }else if(js == "チョキ"){
//             winLoseStr = "あいこ";
//         }else if(js == "パー"){
//             winLoseStr = "勝ち";
//         }
//     }else if(user == "パー"){
//         if(js == "グー"){
//             winLoseStr = "勝ち";
//         }else if(js == "チョキ"){
//             winLoseStr = "負け";
//         }else if(js == "パー"){
//             winLoseStr = "あいこ";
//         }
//     }
//     return winLoseStr;
// }

// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// 自分で考えた分
// if(user_hand != "グー","チョキ","パー"){
//     alert("グー・チョキ・パーのいずれかを入力してください");
// }else if(user_hand == null){
//     alert("またチャレンジしてくださいね");
// }

    while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
      alert('グー・チョキ・パーのいずれかを入力して下さい');
      user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
    }


//null以外の以外はという表現

 
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
 
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// 正解

    if (user_hand != null) {
        alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
    } else {
        alert("またチャレンジしてね");
    }

 
// 結果を表示する、ここは確認問題では使わない
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;
 
    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }
 
    return hand_name;
}
 
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
    var winLoseStr;
 
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }
 
    return winLoseStr;
}

// 「じゃんけんプログラム」に、次の機能を付け足してください。

// 1. グー・チョキ・パー以外の文字列が入力されたときに、「グー・チョキ・パーのいずれかを入力してください」とアラートウィンドウにエラーが表示されるように設定してください。
// 2. アラートウィンドウでエラーが表示された後、もう一度、プロンプト入力欄が表示されて入力できるように設定してください。
// 3. キャンセルボタンが押されたときは、「またチャレンジしてね」というアラートメッセージが出力されるように設定してください。

// ヒント
// キャンセルボタンの判定には、nullを用います。

// もしユーザーの手がグチョキパでは無いとき、アラートを出す

















