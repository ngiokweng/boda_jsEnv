
    function get_cookie(){
        debugger
        // let boxhr=new XMLHttpRequest()
        // boxhr.open('get' , "searchParamModel=%7B%22ObjectType%22%3A1%2C%22SearchKeyList%22%3A%5B%5D%2C%22SearchExpression%22%3Anull%2C%22BeginYear%22%3Anull%2C%22EndYear%22%3Anull%2C%22UpdateTimeType%22%3Anull%2C%22JournalRange%22%3Anull%2C%22DomainRange%22%3Anull%2C%22ClusterFilter%22%3A%22%22%2C%22ClusterLimit%22%3A0%2C%22ClusterUseType%22%3A%22Article%22%2C%22UrlParam%22%3A%22%22%2C%22Sort%22%3A%220%22%2C%22SortField%22%3Anull%2C%22UserID%22%3A%220%22%2C%22PageNum%22%3A2%2C%22PageSize%22%3A20%2C%22SType%22%3Anull%2C%22StrIds%22%3Anull%2C%22IsRefOrBy%22%3A0%2C%22ShowRules%22%3A%22%22%2C%22IsNoteHistory%22%3A0%2C%22AdvShowTitle%22%3Anull%2C%22ObjectId%22%3Anull%2C%22ObjectSearchType%22%3A0%2C%22ChineseEnglishExtend%22%3A0%2C%22SynonymExtend%22%3A0%2C%22ShowTotalCount%22%3A73734952%2C%22AdvTabGuid%22%3A%22%22%7D" || null)
        // let aaa=boxhr.send(true &&  "searchParamModel=%7B%22ObjectType%22%3A1%2C%22SearchKeyList%22%3A%5B%5D%2C%22SearchExpression%22%3Anull%2C%22BeginYear%22%3Anull%2C%22EndYear%22%3Anull%2C%22UpdateTimeType%22%3Anull%2C%22JournalRange%22%3Anull%2C%22DomainRange%22%3Anull%2C%22ClusterFilter%22%3A%22%22%2C%22ClusterLimit%22%3A0%2C%22ClusterUseType%22%3A%22Article%22%2C%22UrlParam%22%3A%22%22%2C%22Sort%22%3A%220%22%2C%22SortField%22%3Anull%2C%22UserID%22%3A%220%22%2C%22PageNum%22%3A2%2C%22PageSize%22%3A20%2C%22SType%22%3Anull%2C%22StrIds%22%3Anull%2C%22IsRefOrBy%22%3A0%2C%22ShowRules%22%3A%22%22%2C%22IsNoteHistory%22%3A0%2C%22AdvShowTitle%22%3Anull%2C%22ObjectId%22%3Anull%2C%22ObjectSearchType%22%3A0%2C%22ChineseEnglishExtend%22%3A0%2C%22SynonymExtend%22%3A0%2C%22ShowTotalCount%22%3A73734952%2C%22AdvTabGuid%22%3A%22%22%7D")
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'somewhere', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            // do something to response
            console.log(this.responseText);
        };
        xhr.send('user=person&pwd=password&organization=place&requiredkey=key');
                
        
        
        let res={
            // b:new XMLHttpRequest().open(''),
            cookie:document.cookie,
            // result:aaa
        }
        
        return res
    }
    

