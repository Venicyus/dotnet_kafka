using Microsoft.AspNetCore.SignalR;
using Server.Services;
using System.Threading.Tasks;

namespace Server.Hubs {
    public class EventHub : Hub {

        private readonly EventService _eventService;

        public EventHub(EventService eventService) {
            _eventService = eventService;
        }

        public Task Get() {
            return Clients.All.SendAsync("Get", _eventService.GetAll());
        }

    }
}
