from django.db import models


class Party(models.Model):
    display_name = models.CharField(max_length=50)
    url = models.CharField(max_length=6, unique=True)


class Group(models.Model):
    party = models.ForeignKey(Party, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=50)
    spend_other = models.IntegerField()
    spend_alchohol = models.IntegerField()
    spend_meat = models.IntegerField()


class Person(models.Model):
    display_name = models.CharField(max_length=50)
    sober = models.BooleanField()
    vegan = models.BooleanField()
    goup_id = models.ForeignKey(Group, on_delete=models.CASCADE)
