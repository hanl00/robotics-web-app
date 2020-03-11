from calendar import HTMLCalendar
from django.utils.html import conditional_escape as esc
from django.utils.safestring import mark_safe
from itertools import groupby
from calendar import HTMLCalendar, monthrange
from datetime import date

class DatelineCalendar(HTMLCalendar):

    def __init__(self, labs):
        super(DatelineCalendar, self).__init__()
        self.labs = self.group_by_day(labs)

    def formatday(self, day, weekday):
        if day != 0:
            cssclass = self.cssclasses[weekday]
            if date.today() == date(self.year, self.month, day):
                cssclass += ' today'
            if day in self.labs:
                cssclass += ' filled'
                body = ['<ul>']
                for workout in self.labs[day]:
                    body.append('<li>')
                    body.append(esc(workout.name))
                    body.append('</a></li>')
                body.append('</ul>')
                return self.day_cell(cssclass, '%d %s' % (day, ''.join(body)))
            return self.day_cell(cssclass, day)
        return self.day_cell('noday', '&nbsp;')

    def formatmonth(self, year, month):
        self.year, self.month = year, month
        return super(DatelineCalendar, self).formatmonth(year, month)

    def group_by_day(self, labs):
        field = lambda workout: workout.close_Date.day
        return dict(
            [(day, list(items)) for day, items in groupby(labs, field)]
        )

    def day_cell(self, cssclass, body):
        return '<td class="%s">%s</td>' % (cssclass, body)
