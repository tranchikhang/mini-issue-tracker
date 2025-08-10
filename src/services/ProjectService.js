var ProjectService = {
    getAll: function() {
        return [{
            "id": 1,
            "color": 1,
            "code": "RT",
            "name": "ECサイト構築",
            "client": "ケスラー合同会社",
            "assignee": "田中 太郎",
            "status": 3,
            "open": 0,
            "closed": 33,
            "total": 33
        }, {
            "id": 2,
            "color": 3,
            "code": "LT",
            "name": "AWSインフラ環境構築",
            "client": "スキーボックス株式会社",
            "assignee": "佐藤 花子",
            "status": 2,
            "open": 22,
            "closed": 41,
            "total": 63
        }, {
            "id": 3,
            "color": 5,
            "code": "TLD",
            "name": "UI/UX改善",
            "client": "桐林商事株式会社",
            "assignee": "鈴木 一郎",
            "status": 2,
            "open": 47,
            "closed": 55,
            "total": 102
        }, {
            "id": 4,
            "color": 7,
            "code": "HTT",
            "name": "互換性テスト",
            "client": "ヤキトリ株式会社",
            "assignee": "高橋 美咲",
            "status": 2,
            "open": 17,
            "closed": 18,
            "total": 35
        }, {
            "id": 5,
            "color": 2,
            "code": "SLB",
            "name": "パフォーマンス検証",
            "client": "タグチャット株式会社",
            "assignee": "伊藤 健",
            "status": 4,
            "open": 65,
            "closed": 1,
            "total": 66
        }, {
            "id": 6,
            "color": 2,
            "code": "HLDL",
            "name": "新規業務アプリ開発",
            "client": "ハーレイ商会",
            "assignee": "中村 裕子",
            "status": 1,
            "open": 3,
            "closed": 19,
            "total": 21
        }, {
            "id": 9,
            "color": 4,
            "code": "TRF",
            "name": "外部API連携",
            "client": "レイリー・フラネッキ株式会社",
            "assignee": "小林 剛",
            "status": 2,
            "open": 24,
            "closed": 0,
            "total": 24
        }, {
            "id": 10,
            "color": 1,
            "code": "ZMT",
            "name": "CRM導入",
            "client": "ファンク商事",
            "assignee": "山本 美穂",
            "status": 2,
            "open": 53,
            "closed": 33,
            "total": 86
        }]
    },
}

module.exports = ProjectService;