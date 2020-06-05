using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Server.Hubs;
using Server.Models;
using Server.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase {

        private readonly EventService _eventService;
        private readonly IHubContext<EventHub> _hubContext;

        public EventsController(EventService eventService, IHubContext<EventHub> hubContext) {
            _eventService = eventService;
            _hubContext = hubContext;
        }

        [HttpGet]
        public List<Event> Get() {
            return _eventService.GetAll();
        }

        [HttpGet("{id}")]
        public Event Get(int id) {
            return _eventService.GetAll().Find(e => e.Id.Equals(id));
        }

        [HttpPost]
        public async Task PostAsync([FromBody] Event ev) {
            _eventService.Add(ev);
            await _hubContext.Clients.All.SendAsync("Add", ev);
        }

        [HttpPut]
        public async Task PutAsync([FromBody] Event ev) {
            _eventService.Edit(ev);
            await _hubContext.Clients.All.SendAsync("Edit", ev);
        }

        [HttpDelete]
        public async Task DeleteAsync([FromBody] Event ev) {
            _eventService.Remove(ev.Id);
            await _hubContext.Clients.All.SendAsync("Remove", ev);
        }
    }
}
