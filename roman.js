function romanconvert(kana) {
    let keycode = "";
    var romanMap = {
        'あ': 'a',
        'い': 'i',
        'う': 'u',
        'え': 'e',
        'お': 'o',
        'か': 'ka',
        'き': 'ki',
        'く': 'ku',
        'け': 'ke',
        'こ': 'ko',
        'さ': 'sa',
        'し': 'si',
        'す': 'su',
        'せ': 'se',
        'そ': 'so',
        'た': 'ta',
        'ち': 'ti',
        'つ': 'tu',
        'て': 'te',
        'と': 'to',
        'な': 'na',
        'に': 'ni',
        'ぬ': 'nu',
        'ね': 'ne',
        'の': 'no',
        'は': 'ha',
        'ひ': 'hi',
        'ふ': 'fu',
        'へ': 'he',
        'ほ': 'ho',
        'ま': 'ma',
        'み': 'mi',
        'む': 'mu',
        'め': 'me',
        'も': 'mo',
        'や': 'ya',
        'ゆ': 'yu',
        'よ': 'yo',
        'ら': 'ra',
        'り': 'ri',
        'る': 'ru',
        'れ': 're',
        'ろ': 'ro',
        'わ': 'wa',
        'ゐ': 'wi',
        'ゑ': 'we',
        'を': 'wo',
        'ん': 'n',
        'が': 'ga',
        'ぎ': 'gi',
        'ぐ': 'gu',
        'げ': 'ge',
        'ご': 'go',
        'ざ': 'za',
        'じ': 'ji',
        'ず': 'zu',
        'ぜ': 'ze',
        'ぞ': 'zo',
        'だ': 'da',
        'ぢ': 'ji',
        'づ': 'zu',
        'で': 'de',
        'ど': 'do',
        'ば': 'ba',
        'び': 'bi',
        'ぶ': 'bu',
        'べ': 'be',
        'ぼ': 'bo',
        'ぱ': 'pa',
        'ぴ': 'pi',
        'ぷ': 'pu',
        'ぺ': 'pe',
        'ぽ': 'po',
        'きゃ': 'kya',
        'きぃ': 'kyi',
        'きゅ': 'kyu',
        'きぇ': 'kye',
        'きょ': 'kyo',
        'くぁ': 'qa',
        'くぃ': 'qi',
        'くぇ': 'qe',
        'くぉ': 'qo',
        'くゃ': 'qya',
        'くゅ': 'qyu',
        'くょ': 'qyo',
        'しゃ': 'sya',
        'しぃ': 'syi',
        'しゅ': 'syu',
        'しぇ': 'sye',
        'しょ': 'syo',
        'ちゃ': 'cha',
        'ちぃ': 'tyi',
        'ちゅ': 'chu',
        'ちぇ': 'tye',
        'ちょ': 'cho',
        'てゃ': 'tha',
        'てぃ': 'thi',
        'てゅ': 'thu',
        'てぇ': 'the',
        'てょ': 'tho',
        'ひゃ': 'hya',
        'ひぃ': 'hyi',
        'ひゅ': 'hyu',
        'ひぇ': 'hye',
        'ひょ': 'hyo',
        'ふぁ': 'fa',
        'ふぃ': 'fi',
        'ふぇ': 'fe',
        'ふぉ': 'fo',
        'みゃ': 'mya',
        'みぃ': 'myi',
        'みゅ': 'myu',
        'みぇ': 'mye',
        'みょ': 'myo',
        'ヴぁ': 'va',
        'ヴぃ': 'vi',
        'ヴぇ': 've',
        'ヴぉ': 'vo',
        'ぎゃ': 'gya',
        'ぎぃ': 'gyi',
        'ぎゅ': 'gyu',
        'ぎぇ': 'gye',
        'ぎょ': 'gyo',
        'じゃ': 'ja',
        'じぃ': 'zyi',
        'じゅ': 'ju',
        'じぇ': 'zye',
        'じょ': 'jo',
        'ぢゃ': 'dya',
        'ぢぃ': 'dyi',
        'ぢゅ': 'dyu',
        'ぢぇ': 'dye',
        'ぢょ': 'dyo',
        'びゃ': 'bya',
        'びぃ': 'byi',
        'びゅ': 'byu',
        'びぇ': 'bye',
        'びょ': 'byo',
        'ぴゃ': 'pya',
        'ぴぃ': 'pyi',
        'ぴゅ': 'pyu',
        'ぴぇ': 'pye',
        'ぴょ': 'pyo',
        'ぁ': 'la',
        'ぃ': 'li',
        'ぅ': 'lu',
        'ぇ': 'le',
        'ぉ': 'lo',
        'ゃ': 'lya',
        'ゅ': 'lyu',
        'ょ': 'lyo',
        'っ': 'ltu',
        'ヴ': 'vu',
        'ー': '-',
        '、': ', ',
        '，': ', ',
        '。': '.'
    };

    let i = 0;
    while (i < kana.length) {
        if (i < kana.length - 1) {
            if (null != kana.charAt(i + 1).match(/^[ゃゅょャュョ]$/)) {
                keycode += romanMap[kana.charAt(i) + kana.charAt(i + 1)];
                i++;
            } else if (null != kana.charAt(i).match(/^[っ]$/)) {
                if (null != kana.charAt(i + 1).match(/^[あいうえお]$/)) {
                    keycode += "ltu"
                } else {
                    if (null != kana.charAt(i + 2).match(/^[ゃゅょャュョ]$/)) {
                        keycode += romanMap[kana.charAt(i + 1)].charAt(0) + romanMap[kana.charAt(i + 1) + kana.charAt(i + 2)];
                        i++;
                    } else {
                        keycode += romanMap[kana.charAt(i + 1)].charAt(0) + romanMap[kana.charAt(i + 1)];
                    }
                    i++;
                }
            } else if (null != kana.charAt(i).match(/^[ん]$/) && null != kana.charAt(i + 1).match(/^[あいうえおなにぬねの]$/)) {
                keycode += "nn";
            } else if (null != kana.charAt(i).match(/\w/)) {
                keycode += kana.charAt(i);
            } else {
                keycode += romanMap[kana.charAt(i)];
            }
        } else {
            keycode += romanMap[kana.charAt(i)];
        }
        i++;
    };

    return keycode;
}
