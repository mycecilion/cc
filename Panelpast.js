
  var key = "AIzaSyBZGCt_mSxMxwaRuvcJYX5WuiJPpmqrbZ4";

            var db = new Dexie("links_DB");
            db.version(1).stores({
                links: 'short,full'
            });

            function createLink() {
                $('#createl').html('<i class="fa fa-spinner fa-spin"></i>&nbsp;Shorten');
                var lurl = $('#lurl').val();

                var data = JSON.stringify({
                    "dynamicLinkInfo": {
                        "dynamicLinkDomain": "ponselku.page.link",
"link": lurl
                    },
                    "suffix": {
                        "option": "SHORT"
                    }
                });

                var xhr = new XMLHttpRequest();
                //xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === this.DONE) {
                        console.log(this.responseText);
                        var newLink = (JSON.parse(this.responseText)).shortLink;
                        $('#resultLink').val(newLink);
                        $('#resultLink').attr("href", newLink);
                        $('#resultLink').attr("target", "_blank");
                        $('#comp-icon').hide();
                        $('#qrcode').empty();
                        $('#qrcode').qrcode({
                            width: 200,
                            height: 200,
                            text: newLink
                        });                        

                        db.links.put({
                            short: newLink,
                            full: lurl
                        }).then(function () {
                            return db.links.get(newLink);
                        }).then(function (link) {
                            //alert(link.full+' = '+link.short);
                        }).catch(function (error) {
                            alert(error);
                        });
                        listAllLinks();
                        $('#createl').html('Shorten');
                    }
                });
xhr.open("POST",
                    "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + key
                );
                xhr.setRequestHeader("content-type", "application/json");

                xhr.send(data);

            }

            function listAllLinks() {
                db.links.count(function (count) {
                    $('#tableName').html('Available links <span class="badge badge-primary">' + count + '</span>');
                });

                db.links.each(link => $('#ltable').append('<li class="list-group-item"><em>' + link.full + '</em> was shotened to <em>' + link.short + '</em></li>'));
            }


            $(document).ready(function () {

                $('#lnksCopy').tooltip('hide');
                $('#lnksCopy').mouseleave(function () {
                    $('#lnksCopy').tooltip('hide');
                });
                listAllLinks();
                var clipboard = new ClipboardJS('.btn');
                clipboard.on('success', function (e) {
                    //console.info('Action:', e.action);
                    //console.info('Text:', e.text);
                    //console.info('Trigger:', e.trigger);

                    e.clearSelection();
                    $('#lnksCopy').attr('title','Successfully copied!');
                    $('#lnksCopy').tooltip('show');
                //    $('#ltable').blur();
                });

                clipboard.on('error', function (e) {//console.error('Action:', e.action);
                    //console.error('Trigger:', e.trigger);                    
                    $('#lnksCopy').attr('title', 'Error, not copied!');
                    $('#lnksCopy').tooltip('show');
                });                
            });
          

      
