using Server.Models;
using System;
using System.Collections.Generic;

namespace Server.Services {
    public class EventService {

        private List<Event> Events = new List<Event>();

        public EventService() {
            Events.Add(new Event() {
                Id = 1,
                Title = "Usuário atualizado!",
                Description = "Usuário Venicyus foi atualizado!",
                Date = new DateTime(2020, 06, 04, 20, 55, 56)
            });

            Events.Add(new Event() {
                Id = 2,
                Title = "Usuário removido!",
                Description = "Usuário Venicyus foi atualizado!",
                Date = new DateTime(2020, 06, 04, 20, 52, 28)
            });
        }

        public List<Event> GetAll() {
            return Events;
        }

        public bool Add(Event ev) {
            ev.Id = Events.Count + 1;
            Events.Add(ev);

            return true;
        }

        public bool Edit(Event ev) {
            var ev2 = Events.Find(e => e.Id.Equals(ev.Id));
            ev2 = ev;

            return true;
        }

        public bool Remove(int id) {
            Events.RemoveAt(Events.FindIndex(e => e.Id.Equals(id)));

            return true;
        }
    }
}
