const test=require('node:test'),assert=require('node:assert');const {srv,io}=require('./index');
test('song code + search',async()=>{await new Promise(r=>srv.listen(0,r));const p=srv.address().port;
 const j=await(await fetch(`http://localhost:${p}/api/songs/code/k000001`)).json();assert.equal(j.code,'K000001');
 const s=await(await fetch(`http://localhost:${p}/api/songs?q=demo`)).json();assert.ok(s.total>=20);io.close()});
