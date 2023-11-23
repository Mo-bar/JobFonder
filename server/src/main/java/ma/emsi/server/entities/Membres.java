package ma.emsi.server.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

/**
 * @author BarkouchMourad
 **/
@Entity
@Data
public class Membres {
    @Id
    private String id;
    private String photo;
    @OneToOne
    private PersonnelInfos personnelInfos;
    @OneToMany
    private Collection<Membres> reseau;

    public Membres() {
        this.id = UUID.randomUUID().toString();
        this.reseau = new ArrayList<>();
    }
}
