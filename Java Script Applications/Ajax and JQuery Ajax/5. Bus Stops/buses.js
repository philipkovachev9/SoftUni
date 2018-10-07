const BUS_ID = $('#stopId').val();
const BUS_LIST = $('#result');
const URL = `https://judgetests.firebaseio.com/businfo/${BUS_ID}.json`;

const request = {
    url: URL,
    success: getBusInfo,
    error: () => $('#stopName').text('Error')
}

function getBusInfo(busStoInfo) {
   let busName = busStoInfo.name;
   let buses = busStoInfo.buses;
   $('#stopName').text(busName);

   for(let busId in buses) {
     let li = $('<li>');
     li.text(`Bus ${busId} arrives in ${buses[busId]}`);
     BUS_LIST.append(li);
   }
}