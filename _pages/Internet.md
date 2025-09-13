---
title: Internet
tags:
  - Software
---
For many years now, rumours about different kinds of network lag-attacks
have circulated for a while and died only to be revived in a year or so.

This document will attempt to explain some concepts of internetworking
and Internet security.

## IP (Internet Protocol)

The Internet Protocol (IP) is the method or protocol by which data is
sent from one computer to another on the Internet. Each host (computer,
router etc) on the Internet has at least one IP address that uniquely
identifies it from all other computers on the Internet. When you send or
receive data (for example, receiving a long [room](room "wikilink")
description in [MUME](MUME "wikilink")), the message gets divided into
little chunks called packets. Each of these packets contains both the
sender's Internet address and the receiver's address. Any packet is sent
first to a gateway computer that understands a small part of the
Internet.

The gateway computer reads the destination address and forwards the
packet to an adjacent gateway that in turn reads the destination address
and so forth across the Internet until one gateway recognizes the packet
as belonging to a computer within its immediate neighbourhood or domain.
That gateway then forwards the packet directly to the computer whose
address is specified.

## DoS (Denial of Service) Attacks

On the Internet, a denial of service (DoS) attack is an incident in
which a user or organization is deprived of the services of a resource
they would normally expect to have. Typically, the loss of service is
the inability of a particular network service, such as MUME, to be
available or the temporary loss of all network connectivity and
services. Common types of DoS attacks are buffer overflow attacks and
SYN-floods.

To be able to execute a DoS attack, you will need at least the
IP-address of the target. Most likely a presumptive attacker would also
want to know what OS the target is running, and - if possible - what
kind of network the target is locally connected to.

## MUME and DoS Attacks

Since MUME doesn't offer the players any way of knowing what IP-address
any given player has, the possibility of DoS Attacks to gain advantage
of an enemy etc is very limited. A presumptive attacker would need to
take control of a host with a network device very close to MUME, and
listen in on all network traffic. Then the attacker would need to filter
out information about his/her enemy, and use some kind of attack-program
to disable the target. Of course, this is in theory all very possible,
but also VERY unlikely to happen.

If someone were to gain control of above mentioned host in the vicinity
of MUME, he or she could do a lot worse damage than executing DoS
Attacks on PK enemies.

## PK and Lag

When going from a non-[PK](PK "wikilink") situation to a PK-situation,
generally the textual output from MUME increases a lot. This means that
even a low packet loss link gets a more notable latency (lag) when
loaded with more packets. This lag is generally because of the resending
(packet loss recovery) offered by TCP (Transmission Control Protocol),
which is the transport layer above IP that MUME uses for player
connections.

It might also be worth noting that having a 0% packet loss link when
using a ping-program (a program that uses the ICMP echo-request and
echo-reply messages), does not guarantee you will have 0% packet loss
over a TCP session (such as a connection to MUME).
